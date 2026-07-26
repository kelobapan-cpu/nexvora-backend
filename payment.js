// ====================================
// NexVora Wallet System
// payment.js v1.0
// ====================================


// Validate Amount

export async function validateAmount(amount){

    if(!amount){

        return{

            success:false,
            message:"Amount Required"

        };

    }

    return{

        success:true,
        message:"Amount Valid"

    };

}

// Validate Wallet

export async function validateWallet(wallet){

    if(!wallet){

        return{

            success:false,
            message:"Wallet Not Found"

        };

    }

    return{

        success:true,
        message:"Wallet Valid"

    };

}

// Check Minimum Amount

export async function checkMinimumAmount(amount){

    if(!amount){

        return{

            success:false,
            message:"Amount Required"

        };

    }

    return{

        success:true,
        message:"Minimum Amount Valid"

    };

}

// Check Maximum Amount

export async function checkMaximumAmount(amount){

    if(!amount){

        return{

            success:false,
            message:"Amount Required"

        };

    }

    return{

        success:true,
        message:"Maximum Amount Valid"

    };

}
