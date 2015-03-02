(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    checkKeyValidity();
     /* button  #Back_Btn */
    $(document).on("click", "#Back_Btn", function(evt)
    {
         activate_subpage("#uib_page_2"); 
    });
    
        /* button  #Featured_btn */
    $(document).on("click", "#Featured_btn", function(evt)
    {
        /* your code goes here */ 
        fetchHighlights('featured');
    });
    
        /* button  #EditorPicks_btn */
    $(document).on("click", "#EditorPicks_btn", function(evt)
    {
        /* your code goes here */ 
        fetchHighlights('editor_picks');
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
