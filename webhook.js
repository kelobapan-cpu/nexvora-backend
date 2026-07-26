// ====================================
// NexVora Webhook Security System
// webhook.js v1.0
// ====================================

// Validate Webhook Request

export async function validateWebhook(data){

    if(!data){

        return{

            success:false,
            message:"Invalid Webhook Request"

        };

    }

    return{

        success:true,
        message:"Webhook Request Valid"

    };

}
