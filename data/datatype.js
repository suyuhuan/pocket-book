class  BillData {
    set Type(Type) {
      this._Type = Type;
    }
  
    set Time(Time) {
      this._Time = Time;
    }
  
    set Category(Category) {
      this._Category = Category;
    }
    set Amount(Amount) {
        this._Amount = Amount;
    }
  
    get Type() {
      return this._Type;
    }
  
    get Time() {
      return this._Time;
    }
  
    get Category() {
      return this._Category;
    }
    get Amount() {
        return this._Amount;
      }
 }

class CategoriesData {
    set Id(Id) {
      this._Id = Id;
    }
  
    set Type(Type) {
      this._Type = Type;
    }
  
    set Name(Name) {
      this._Name = Name;
    }
  
    get Id() {
      return this._Id;
    }
  
    get Type() {
      return this._Type;
    }
  
    get Name() {
      return this._Name;
    }
  }

  module.exports = {
      BillData,
      CategoriesData
  }