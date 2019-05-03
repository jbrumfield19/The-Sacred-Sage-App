class CreateProductBundles < ActiveRecord::Migration[5.2]
  def change
    create_table :product_bundles do |t|
      t.string :name
      t.string :description
      t.string :url
      t.string :image

      t.timestamps
    end
  end
end
