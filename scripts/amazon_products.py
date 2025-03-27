from amazon.paapi import AmazonAPI
import openai
import os

# Fetch Amazon products
amazon = AmazonAPI(
    os.getenv("AMAZON_ACCESS_KEY"),
    os.getenv("AMAZON_SECRET_KEY"),
    os.getenv("AMAZON_TAG"),
    "US"
)
products = amazon.search_products(
    keywords="ergonomic office chair mat",
    search_index="OfficeProducts",
    item_count=5
)

# Generate HTML with AI reviews
html = ""
for product in products:
    openai.api_key = os.getenv("OPENAI_KEY")
    review = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[{
            "role": "user",
            "content": f"Write a 1-sentence review for {product.title} (${product.price}). Focus on comfort and durability."
        }]
    ).choices[0].message.content

    html += f"""
    <div class="product-card">
        <img src="{product.image}" alt="{product.title}">
        <h3>{product.title}</h3>
        <p class="price">${product.price}</p>
        <p class="review">{review}</p>
        <a href="https://www.amazon.com/dp/{product.asin}/?tag={os.getenv("AMAZON_TAG")}" 
           class="buy-button" 
           target="_blank" 
           rel="sponsored noopener">
            Buy on Amazon <i class="fas fa-external-link-alt"></i>
        </a>
    </div>
    """

# Update the website
with open("../index.html", "r") as f:
    content = f.read()

new_content = content.replace("<!-- AUTO-PRODUCTS -->", html)

with open("../index.html", "w") as f:
    f.write(new_content)
