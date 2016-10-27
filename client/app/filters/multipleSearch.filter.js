export default function ($filter) {
    'ngInject';
    // http://stackoverflow.com/questions/15868248/how-to-filter-multiple-values-or-operation-in-angularjs
    return function (items, keyObj) {
        var filterObj = {
            data:items,
            filteredData:[],
            applyFilter : function(obj,key){
                var fData = [];
                if (this.filteredData && this.filteredData.length == 0)
                    this.filteredData = this.data;
                if (obj){
                    var fObj = {};
                    if (!angular.isArray(obj)){
                        fObj[key] = obj;
                        fData = fData.concat($filter('filter')(this.filteredData,fObj));
                    } else if (angular.isArray(obj)){
                        if (obj.length > 0){
                            for (var i=0;i<obj.length;i++){
                                if (angular.isDefined(obj[i])){
                                    fObj[key] = obj[i];
                                    fData = fData.concat($filter('filter')(this.filteredData,fObj, (actual, expected) => {
                                        return angular.equals(actual, expected);
                                    }));
                                }
                            }

                        }
                    }
                    this.filteredData = fData;
                }
            }
        };
        if (keyObj){
            angular.forEach(keyObj,function(obj,key){
                filterObj.applyFilter(obj,key);
            });
        }
        return filterObj.filteredData;
    };

}
