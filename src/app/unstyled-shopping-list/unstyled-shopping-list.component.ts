import { Component } from '@angular/core';

@Component({
  selector: 'app-unstyled-shopping-list',
  templateUrl: './unstyled-shopping-list.component.html',
  styleUrls: ['./unstyled-shopping-list.component.css']
})
export class UnstyledShoppingListComponent {

  itemsToBuyList = [
    { text: 'Kitap', checked: false },
    { text: 'Defter', checked: false },
  ];

  boughtItemsList = [
    { text: 'Uçlu Kalem', checked: true }
  ];

  /*
    itemsToBuyList
    boughtItemsList
  */

  itemToBuy = '';

  constructor() { }

  addToCart(itemToBuy) {
    this.itemsToBuyList.push({
      text: itemToBuy,
      checked: false
    });

    // Clear input field
    this.itemToBuy = '';
  }

  moveItemToBoughtList(itemIndex) {
    if (itemIndex > -1) {
      const item = this.itemsToBuyList[itemIndex];

      console.log(`Moving ${item.text} at ${itemIndex} to bought list`);

      // Remove item from items to buy list, and add it to the bought list
      this.itemsToBuyList.splice(itemIndex, 1);

      this.boughtItemsList.push(item);
    }
  }

  moveItemToBuyList(itemIndex) {
    if (itemIndex > -1) {
      const item = this.boughtItemsList[itemIndex];

      console.log(`Moving ${item.text} at ${itemIndex} to buy list`);

      // Remove item from items to buy list, and add it to the bought list
      this.boughtItemsList.splice(itemIndex, 1);

      this.itemsToBuyList.push(item);
    }
  }

  updateLists(item, index) {
    if (item.checked === false) {
      this.moveItemToBuyList(index);
    } else {
      this.moveItemToBoughtList(index);
    }
  }

  deleteItemFromListAtIndex(list, index) {
    if (list) {
      if (index > -1) {
        list.splice(index, 1);
      }
    }
  }

  deleteItemFromList(item, index) {
    // If the clicked item in the list was unchecked, it is
    // in the to buy list. Otherwise it is in the bought items list
    if (item.checked === false) {
      this.deleteItemFromListAtIndex(this.itemsToBuyList, index);
    } else {
      this.deleteItemFromListAtIndex(this.boughtItemsList, index);
    }
  }
}
