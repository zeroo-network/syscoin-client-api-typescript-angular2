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



export interface Account {
    /**
     * Only returned if imported addresses were involved in transaction
     */
    involvesWatchonly?: boolean;

    /**
     * The account name of the receiving account
     */
    account?: string;

    /**
     * The total amount received by addresses with this account
     */
    amount?: number;

    /**
     * The number of confirmations of the most recent transaction included
     */
    confirmations?: number;

    /**
     * A comment for the address/transaction, if any
     */
    label?: string;

}
