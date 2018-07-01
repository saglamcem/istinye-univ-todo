import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  itemsToBuy = [
    { text: 'Kitap', checked: false },
    { text: 'Uçlu kalem', checked: false }
  ];
  boughtItems = [
    { text: 'Defter', checked: true }
  ];

  itemToBuy = '';

  addToList(itemText) {
    if (itemText.trim() !== '') {
      const itemToAdd = {
        text: itemText,
        checked: false
      };

      this.itemsToBuy.push(itemToAdd);
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
