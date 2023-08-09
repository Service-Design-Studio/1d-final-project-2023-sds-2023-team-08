# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_07_17_184507) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "accounts", force: :cascade do |t|
    t.string "account_number"
    t.integer "initial_deposit"
    t.string "bank"
    t.string "account_type"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id", null: false
    t.index ["user_id"], name: "index_accounts_on_user_id"
  end

  create_table "disputes", force: :cascade do |t|
    t.string "status"
    t.string "disputer_acc_id"
    t.string "dispute_reason"
    t.text "dispute_reason_details"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "disputee_id"
    t.integer "disputer_id"
    t.bigint "transaction_id"
    t.string "date_time"
    t.string "day_date"
    t.text "further_action"
    t.index ["transaction_id"], name: "index_disputes_on_transaction_id"
  end

  create_table "paynows", force: :cascade do |t|
    t.string "phone"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "accnum"
    t.string "bank"
    t.string "nickname"
    t.text "paid_bef_phone_num", default: "[]"
  end

  create_table "transactions", force: :cascade do |t|
    t.string "transaction_name"
    t.string "transaction_type"
    t.string "recipient_account_number"
    t.datetime "datetime"
    t.float "amount"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "account_id", null: false
    t.string "comments"
    t.string "date_time"
    t.boolean "intrabank"
    t.index ["account_id"], name: "index_transactions_on_account_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password"
    t.string "phone"
    t.string "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "accounts", "users"
  add_foreign_key "disputes", "transactions"
  add_foreign_key "transactions", "accounts"
end
