new Vue ({
    el: '#vue-app',
    data:{
        health: 100,
        ended: false,
        cursory: 'grabbing',
    },
    methods: {
        punch: function(){
            var audio = new Audio('audio/punch.mp3'); // path to file
            audio.play();
            this.health -=10;
            if (this.health <=0) {
                this.ended = true;
                this.cursory= 'auto';
            } 
        },
        restart: function(){
            this.health = 100;
            this.ended = false;
            this.cursory= 'grabbing';
        },
    },
    computed: {
         
    }

})