/**
 * @schema AdminPostOrderClaimsReqSchema
 * type: object
 * description: SUMMARY
 * x-schemaName: AdminPostOrderClaimsReqSchema
 * required:
 *   - type
 *   - order_id
 * properties:
 *   type:
 *     type: string
 *     description: The claim's type.
 *     enum:
 *       - refund
 *       - replace
 *   order_id:
 *     type: string
 *     title: order_id
 *     description: The claim's order id.
 *   description:
 *     type: string
 *     title: description
 *     description: The claim's description.
 *   internal_note:
 *     type: string
 *     title: internal_note
 *     description: The claim's internal note.
 *   reason_id:
 *     type: string
 *     title: reason_id
 *     description: The claim's reason id.
 *   metadata:
 *     type: object
 *     description: The claim's metadata.
 * 
*/

