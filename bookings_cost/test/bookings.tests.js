let Monday ={
    check_in_day: 'Monday',
    duration: 3,
    cat_name : 'Snowy'
  };
  let Tuesday ={
    check_in_day: 'tuesday',
    duration: 4,
    cat_name : 'wiskey'
  };
  let two ={
    check_in_day: 'Wednesday',
    duration: 3,
    cat_name : 'Snowy'
  };

  let Friday ={
    check_in_day: 'Friday',
    duration: 3,
    cat_name : 'Snowy'
  }

describe('this test (bookingCost)' , function(){
    it('should show Monday discount if the booking is made for Monday without discount ' , function(){
        assert.equal(135.00,bookingCost(Monday));

    });
    it('should show Friday discount if the booking is made for Friday with a discount of 15%' , function(){
        assert.equal(114.75,bookingCost(Friday));

    });
    it('should show  discount if the booking is made for Friday with a discount of 15%' , function(){
        assert.equal(114.75,bookingCost(Friday));

    });
    it('should show Tuesday price for a duration of 4' , function(){
        assert.equal(180.00,bookingCost(Tuesday));

    })

});
