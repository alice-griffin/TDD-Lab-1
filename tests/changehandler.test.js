
describe('changeHandler', () => {
	it('when an event handler is constructed, cashTendered is 0, amountDue is 5', () => {
        let test1 = new ChangeHandler(5);
        expect(test1.amountDue).toBe(5);
        expect(test1.cashTendered).toBe(0);
    })
    it('inserting a quarter adds 25, inserting a dime adds 10, inserting a nickel adds 5, inserting a penny adds 1', () => {
        // arrange
        const newChangeHandler = new ChangeHandler(10);
        // act & assert
        newChangeHandler.insertCoin("quarter");
        expect(newChangeHandler.cashTendered).toBe(25);
        newChangeHandler.insertCoin("dime");
        expect(newChangeHandler.cashTendered).toBe(35);
        newChangeHandler.insertCoin("nickel");
        expect(newChangeHandler.cashTendered).toBe(40);
        newChangeHandler.insertCoin("penny");
        expect(newChangeHandler.cashTendered).toBe(41);
    })
    it('isPaymentSufficient returns true is cashTendered is more than amountDue', () => {
        // arrange
        const newChangeHandler2 = new ChangeHandler(10);
        // act
        newChangeHandler2.cashTendered = 15;
        const isPaymentSufficient = newChangeHandler2.isPaymentSufficient();
        expect(isPaymentSufficient).toBeTruthy();
    })
    it('isPaymentSufficient returns false if cashTendered less than amountDue', () => {
        const newChangeHandler3 = new ChangeHandler(10);
        // act
        newChangeHandler3.cashTendered = 7;
        const isPaymentSufficient = newChangeHandler3.isPaymentSufficient();
        expect(isPaymentSufficient).not.toBeTruthy();
    })
    it('isPaymentSufficient returms true if cashTendered is equal to amount due', () => {
        const newChangeHandler4 = new ChangeHandler(3);
        newChangeHandler4.cashTendered = 3;
        const isPaymentSufficient = newChangeHandler4.isPaymentSufficient();
        expect(isPaymentSufficient).toBeTruthy();
    })
    it('32 change produces 1 quarter, 0 dimes, 1 nickel and 2 pennies', () => {
        const newChangeHandler5 = new ChangeHandler(68);
        //newChangeHandler5.cashTendered = 100;
        newChangeHandler5.insertCoin("quarter")
        newChangeHandler5.insertCoin("quarter")
        newChangeHandler5.insertCoin("quarter")
        newChangeHandler5.insertCoin("quarter")
        //
        const giveChange = newChangeHandler5.giveChange();
        expect(giveChange).toEqual({quarters: 1, dimes: 0, nickels: 1, pennies: 2})
    })
    it('10 change produces 0 quarters, 1 dime, 0 nickels, 0 pennies', () => {
        const newChangeHandler5 = new ChangeHandler(25);
        newChangeHandler6.insertCoin("quarter")
        newChangeHandler6.insertCoin("dime")
        //
        const giveChange = newChangeHandler5.giveChange();
        expect(giveChange).toEqual({quarters: 0, dimes: 1, nickels: 0, pennies: 0})
    })
    it('27 change produces 1 quarter, ')
})

