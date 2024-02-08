
export const appendURL = (url,array) => {

    if(array.length > 0) {

        let appendedAllParams = ""

        for(let i = 0; i < array.length; i++){

            if(array[i].key.length !== 0  && array[i].value.length !== 0 ){
                const keyparams = array[i].key
                const valparams = array[i].value
                appendedAllParams = appendedAllParams + keyparams + "=" + valparams + "&"
            }

            else{
                return url
            }
        }
    
        const appendedURL = url + "?" + appendedAllParams

        return appendedURL.slice(0,-1)
    }


    else{
        return url
    }


}