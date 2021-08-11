// From "ipdata.co"
const _API_IP_ = "https://api.ipdata.co/?api-key=b1a8d0e09079c12198256d42b384e59b965d6313b53c65923180c06d";

const app = {
    data() {
        return {
            ip : null,
            city : null,
            country : null,
            region : null,
            latitude : null,
            longitude : null,
            timezone : null,
            img : null
        }
    },
    methods: {
        loadMap : function(lat,long){
            _loadMap(lat,long);
        },
        loadData : function () {
            jnet({
                url: _API_IP_
            }).request($response => {
                if ($response) {
                    const obj = JSON.parse($response);

                    if (obj) {
                        this.ip = obj.ip;
                        this.city = obj.city;
                        this.country = obj.country_name;
                        this.region = obj.region;
                        this.latitude = obj.latitude;
                        this.longitude = obj.longitude;
                        this.timezone = obj.time_zone['name'];
                        this.img = obj.flag;

                        this.loadMap(this.longitude,this.latitude);
                    }
                }
            })
        }
    },
    mounted() {
        this.loadData();
    }
}

Vue.createApp(app).mount('#app')