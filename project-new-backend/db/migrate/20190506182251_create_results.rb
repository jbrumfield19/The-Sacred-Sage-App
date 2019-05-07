class CreateResults < ActiveRecord::Migration[5.2]
  def change
    create_table :results do |t|
      t.string :category
      t.belongs_to :user
      t.belongs_to :product_bundle


      t.timestamps
    end
  end
end
