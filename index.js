try {
    
    if(require && module && module.exports) return null;
    
    module.exports = require('./js-editable-angular');
    
} catch (error) {
    
}