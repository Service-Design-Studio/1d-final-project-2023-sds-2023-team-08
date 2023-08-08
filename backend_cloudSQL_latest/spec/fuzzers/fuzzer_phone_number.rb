class FuzzerPhoneNumber
    def generate
        # Generate a random 7-digit number.
        random_number =''
        while random_number.length < 7
            random_number += rand(1..9).to_s
        end
  
        # Ensure the generated number starts with 9 or 8.
        phone_number = %w[9 8].sample + random_number
  
        phone_number
    end
end