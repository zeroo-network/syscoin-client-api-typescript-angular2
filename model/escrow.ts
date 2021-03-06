/**
 * Syscoin API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.2
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */



export interface Escrow {
    escrowtype?: string;

    escrow?: string;

    time?: string;

    seller?: string;

    arbiter?: string;

    buyer?: string;

    offer?: string;

    offerlink_seller?: string;

    offertitle?: string;

    quantity?: string;

    price?: string;

    systotal?: number;

    sysfee?: number;

    fee?: string;

    total?: string;

    totalwithfee?: number;

    currency?: string;

    exttxid?: string;

    escrowaddress?: string;

    paymentoption?: number;

    paymemntoption_display?: string;

    redeem_txid?: string;

    txid?: string;

    height?: string;

    pay_message?: string;

    expired?: number;

    status?: string;

    buyer_feedback?: Array<string>;

    avg_buyer_rating?: number;

    seller_feedback?: Array<string>;

    avg_seller_feedback?: number;

    arbiter_feedback?: Array<string>;

    avg_arbiter_rating?: number;

    avg_rating_count?: number;

    avg_rating?: number;

    avg_rating_display?: string;

}
