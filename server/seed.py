from random import choice, randint
from models import Item, List, Post, Forum
from config import db, app

with app.app_context():
    print("______ITEMS TABLE______")
    Item.query.delete()
    print("Deleted Items from database...")
    print("Creating Items for database...")
    item_names = [
        "Pink Butterfly",
        "Orange Butterfly",
        "Red Butterfly",
        "Purple Butterfly"
    ]

    items = []
    for name in item_names:
        item = Item(title=name, time_available=4, month_available="November")
        items.append(item)

    db.session.add_all(items)
    db.session.commit()
    print(f"{len(items)} Items have been seeded into database...\n")    
        