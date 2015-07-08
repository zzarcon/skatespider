export default function(){
  this.transition(
    this.fromRoute('dashboard'),
    this.toRoute('users'),
    this.use('toUp'),
    this.reverse('toDown')
  );
};