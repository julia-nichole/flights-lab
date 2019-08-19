var Flight = require('.//models/flight');
module.exports = {
    create
};
function create(req,res){
    req.body.flight = req.params.id;
    Ticket.create(req.body, function (err, ticket) {  
      let newTicket = new Ticket(req.body);
      newTicket.save(function(err, result) {
          res.redirect(`/flights/${req.params.id}`);
      })
    });
}