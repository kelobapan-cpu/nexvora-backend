// ====================================
// NexVora Payment Verification System
// verify.js v1.0
// ====================================


// Validate Request
export async function validateRequest(data){

    if(!data){

        return{

            success:false,
            message:"Invalid Request"

        };

    }

    return{

        success:true,
        message:"Request Valid"

    };

}


// Validate UTR
export async function validateUTR(utr){

}


// Check Duplicate UTR
export async function checkDuplicateUTR(utr){

}


// Check Payment Exists
export async function checkPaymentExists(utr){

}


// Verify Merchant
export async function verifyMerchant(data){

}


// Verify Amount
export async function verifyAmount(data){

}


// Verify Payment Status
export async function verifyPaymentStatus(data){

}


// Check Already Claimed
export async function checkAlreadyClaimed(utr){

}


// Generate Response
export async function generateResponse(status,message){

}
