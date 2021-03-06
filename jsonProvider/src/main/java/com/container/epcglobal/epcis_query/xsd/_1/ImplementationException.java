
package com.container.epcglobal.epcis_query.xsd._1;

import javax.xml.bind.annotation.*;


/**
 * <p>Java-Klasse f�r ImplementationException complex type.
 * 
 * <p>Das folgende Schemafragment gibt den erwarteten Content an, der in dieser Klasse enthalten ist.
 * 
 * <pre>
 * &lt;complexType name="ImplementationException">
 *   &lt;complexContent>
 *     &lt;extension base="{urn:epcglobal:epcis-query:xsd:1}EPCISException">
 *       &lt;sequence>
 *         &lt;element name="severity" type="{urn:epcglobal:epcis-query:xsd:1}ImplementationExceptionSeverity"/>
 *         &lt;element name="queryName" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="subscriptionID" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/extension>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "ImplementationException", propOrder = {
    "severity",
    "queryName",
    "subscriptionID"
})
public class ImplementationException
    extends EPCISException
{

    @XmlElement(required = true)
    @XmlSchemaType(name = "NCName")
    protected ImplementationExceptionSeverity severity;
    protected String queryName;
    protected String subscriptionID;

    /**
     * Ruft den Wert der severity-Eigenschaft ab.
     * 
     * @return
     *     possible object is
     *     {@link ImplementationExceptionSeverity }
     *     
     */
    public ImplementationExceptionSeverity getSeverity() {
        return severity;
    }

    /**
     * Legt den Wert der severity-Eigenschaft fest.
     * 
     * @param value
     *     allowed object is
     *     {@link ImplementationExceptionSeverity }
     *     
     */
    public void setSeverity(ImplementationExceptionSeverity value) {
        this.severity = value;
    }

    /**
     * Ruft den Wert der queryName-Eigenschaft ab.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getQueryName() {
        return queryName;
    }

    /**
     * Legt den Wert der queryName-Eigenschaft fest.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setQueryName(String value) {
        this.queryName = value;
    }

    /**
     * Ruft den Wert der subscriptionID-Eigenschaft ab.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getSubscriptionID() {
        return subscriptionID;
    }

    /**
     * Legt den Wert der subscriptionID-Eigenschaft fest.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setSubscriptionID(String value) {
        this.subscriptionID = value;
    }

}
