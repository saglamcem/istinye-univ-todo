import { Component } from '@angular/core';

@Component({
  selector: 'app-materialized-shopping-list',
  templateUrl: './materialized-shopping-list.component.html',
  styleUrls: ['./materialized-shopping-list.component.css']
})
export class MaterializedShoppingListComponent {

  itemsToBuy = [
    { text: 'Kitap', checked: false },
    { text: 'Uçlu kalem', checked: false }
  ];

  boughtItems = [
    { text: 'Defter', checked: true }
  ];

  itemToBuy = '';

  constructor() { }

  addToList(itemText) {
    if (itemText.trim() !== '') {
      const itemToAdd = {
        text: itemText,
        checked: false
      };

      // Look for item in items to buy list
      const filteredItemsToBuyList = this.itemsToBuy
        .map(item => item.text.toLowerCase())
        .filter(text => text === itemText.toLowerCase());

      // Look for item in bought items list
      const filteredBoughtItemsList = this.boughtItems
        .map(item => item.text.toLowerCase())
        .filter(text => text === itemText.toLowerCase());

      // If the item isn't in the "to buy" or "bought" list, add the item to the cart
      if (filteredItemsToBuyList.length === 0 && filteredBoughtItemsList.length === 0) {
        this.itemsToBuy.push(itemToAdd);
      }
    }

    // Clear input field
    this.itemToBuy = '';
  }

  addToCart(itemIndex) {
    if (itemIndex > -1) {
      const item = this.itemsToBuy[itemIndex];

      console.log(`Removing ${item.text} at ${itemIndex}`);

      // Remove item from items to buy list
      this.itemsToBuy.splice(itemIndex, 1);

      this.boughtItems.push(item);
    }
  }

  removeItemFromCart(itemIndex) {
    if (itemIndex > -1) {
      const item = this.boughtItems[itemIndex];

      console.log(`Removing ${item.text} at ${itemIndex}`);

      // Remove item from cart
      this.boughtItems.splice(itemIndex, 1);

      this.itemsToBuy.push(item);
    }
  }

  deleteItemAtIndex(item, index) {
    if (item.checked === true) {
      this.deleteItemFromListAtIndex(this.boughtItems, index);
    } else {
      this.deleteItemFromListAtIndex(this.itemsToBuy, index);
    }
  }

  deleteItemFromListAtIndex(list, index) {
    if (list) {
      if (index > -1) {
        list.splice(index, 1);
      }
    }
  }

  updateLists(item, index) {
    console.log('Item is', item.text);
    // The item was in the bought items list
    if (item.checked === true) {
      this.addToCart(index);
    } else {
      this.removeItemFromCart(index);
    }
  }
}
