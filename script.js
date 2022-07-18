$('#events-filter span').click(function(){
    
    // Remove class 'active' from any <span> that is currently active 
    $('#events-filter .active').removeClass('active');
    
    // give this <span> that was clicked on a class of 'active' 
    $(this).addClass('active');

    // get the name of the cateory from this <span>, remove up to two spaces from the text and replace them with dashes, and make it lowercase 
    var filterVal = $(this).text().replace(' ','-').replace(' ','-').toLowerCase();

    // This is something new, it's an 'each' function which is basically iterates through each element that matches the selector and applies the function one by one.
    
    $('#event-grid .event-card').each(function() {
      
        // If the filter value that they have clicked on is 'all' then remove the class of hidden from each gallery-item. 

        if (filterVal == 'all') {
          $(this).removeClass('hidden');
          
        }
      
        // if it's not all, then 
        else {
           if($(this).hasClass(filterVal)) {
              $(this).removeClass('hidden'); // show those that have the filter class
             
            }
          else {
              $(this).addClass('hidden'); // hide those that do not have the filter
            }};
        });
      
});
