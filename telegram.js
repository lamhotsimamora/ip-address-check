const bot_key="1888710721:AAE9QXln5ah4kidcVkAIQGU-Bh4smeF2lhQ"

const _URL_ = "https://api.telegram.org/bot"+bot_key+"/sendMessage?chat_id=630610100&text="

function _sendToTelegram(message){
    jnet({
        url : _URL_+message
    }).request($response=>{
        console.log($response);
    })
}