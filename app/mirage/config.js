export default function() {
  this.namespace = '/api';

  this.get('/users');
  this.get('/videos');
}