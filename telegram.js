const bot_key="5786170846:AAFVwiakMkWTvq1eGnI0iYh3xhQfD2iJWB8"

const _URL_ = "https://api.telegram.org/bot"+bot_key+"/sendMessage?chat_id=630610100&text="

function _sendToTelegram(message){
    jnet({
        url : _URL_+message
    }).request($response=>{
        console.log($response);
    })
}
