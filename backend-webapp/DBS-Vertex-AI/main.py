from flask import Flask, request, jsonify,json
import vertexai
from vertexai.preview.language_models import TextGenerationModel
from google.cloud import aiplatform
import os
from profanity_checker import check_profanities

app = Flask(__name__)

# Load API key from config file
with open('config.json') as config_file:
    config = json.load(config_file)

api_key = config['api_key']

def call_vertex_ai_model(reason, transactionAmt, correctamount, comment):
    vertexai.init(project="dbs-feature-4", location="us-central1")
    parameters = {
        "temperature": 0.2,
        "max_output_tokens": 50,
        "top_p": 0.82,
        "top_k": 37
    }
    model = TextGenerationModel.from_pretrained("text-bison@001")

    if reason == 'Transfer to Wrong Account':
        response = model.predict(
            f"""Imagine that you are the most politest man in the world, who would check that the response has not a single vulgarity nor any rude remarks. You are able to converse fluently in different languages, especially chinese. Moreover, you would turn the response into English so that your fellow friends who speaks mainly English is able to understand.

        Sample expected input and output:
        Input 1- I am sorry sent you wrong amount of money, 
        Output 1 - Apologies for sending you the wrong amount of money and wish that you return it
        Input 2 - I am sorry that I sent to the wrong account, I need that money to pay my medical bill
        Output 2 - Apologies for sending wrongly, I need the money for my medical bills

        Additional things to note:
        1. Always make sure the sentence end with a full stop
        2. Shorten the sentence as much as possible while ensuring it end with a full stop
        3. If there is an amount given, do the math to track the differences

        Given the comment rephrase into an expected output as the persona
{comment}""",
            **parameters
        )
        
    elif reason == 'Transfer Wrong Amount':
        response = model.predict(
            f"""Imagine that you are the most politest man in the world, who would check that the response has not a single vulgarity nor any rude remarks. You are able to converse fluently in different languages, especially chinese. Moreover, you would turn the response into English so that your fellow friends who speaks mainly English is able to understand.

                Sample expected input and output:
                Input 1- I am sorry sent you wrong amount of money, 
                Output 1 - Apologies for sending you the wrong amount of money and wish that you return it
                Input 2 - I am sorry that I sent to the wrong account, I need that money to pay my medical bill
                Output 2 - Apologies for sending wrongly, I need the money for my medical bills

                Additional things to note:
                1. Always make sure the sentence end with a full stop
                2. Shorten the sentence as much as possible while ensuring it end with a full stop
                3. If there is an amount given, do the math to track the differences

                Given the comment rephrase into an expected output as the persona
        {comment}""",
            **parameters
        )

    elif reason == 'Unknown Transaction':
        response = model.predict(
            f"""Read the {comment} and write to the sender that the transfer of ${abs(transactionAmt)} is mistaken.
            Indicate that I would like to refund it as well. 
            Keep the message short, it must not exceed 200 characters""",
            **parameters
        )

    response_text = response.text.replace("\n", " ")[:200]  # Limit response to 200 characters
    return response_text

@app.route('/generate_text', methods=['POST'])
def generate_text():
    data = request.get_json()
    reason = data.get('reason')
    transactionAmt = data.get('transactionAmt')
    correctAmount = data.get('correctamount')
    comment_value = data.get('comment')

    # Call the Vertex AI model and generate text
    generated_text = call_vertex_ai_model(reason, transactionAmt, correctAmount, comment_value)
    response_data = {
        "generated_text": generated_text
    }

    return jsonify(response_data)

@app.route('/check_profanities', methods=['POST'])
def check_profanities_route():
    data = request.get_json()
    comment_value = data.get('comment')
    
    profanity_result = check_profanities(comment_value)
    
    response_data = {
        "profanity_detected": profanity_result
    }
    
    return jsonify(response_data)

if __name__ == '__main__':
    app.run(debug=False, host="0.0.0.0", port=int(os.environ.get("PORT", 8080)))
