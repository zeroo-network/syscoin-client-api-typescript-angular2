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



export interface SendFromRequest {
    /**
     * The name of the account to send funds from. May be the default account using \"\".
     */
    fromaccount: string;

    /**
     * The syscoin address to send funds to.
     */
    tosyscoinaddress: string;

    /**
     * he amount in SYS (transaction fee is added on top).
     */
    amount: number;

    /**
     * Only use funds with at least this many confirmations.
     */
    minconf?: number;

    /**
     * A comment used to store what the transaction is for. This is not part of the transaction, just kept in your wallet.
     */
    comment?: string;

    /**
     * An optional comment to store the name of the person or organization to which you're sending the transaction. This is not part of the transaction, it is just kept in your wallet.
     */
    commentto?: string;

}
