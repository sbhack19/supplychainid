
package com.container.epcglobal.epcis_query.xsd._1;

import javax.xml.bind.annotation.*;


/**
 * <p>Java-Klasse f�r Subscribe complex type.
 * 
 * <p>Das folgende Schemafragment gibt den erwarteten Content an, der in dieser Klasse enthalten ist.
 * 
 * <pre>
 * &lt;complexType name="Subscribe">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="queryName" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *         &lt;element name="params" type="{urn:epcglobal:epcis-query:xsd:1}QueryParams"/>
 *         &lt;element name="dest" type="{http://www.w3.org/2001/XMLSchema}anyURI"/>
 *         &lt;element name="controls" type="{urn:epcglobal:epcis-query:xsd:1}SubscriptionControls"/>
 *         &lt;element name="subscriptionID" type="{http://www.w3.org/2001/XMLSchema}string"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "Subscribe", propOrder = {
    "queryName",
    "params",
    "dest",
    "controls",
    "subscriptionID"
})
public class Subscribe {

    @XmlElement(required = true)
    protected String queryName;
    @XmlElement(required = true)
    protected QueryParams params;
    @XmlElement(required = true)
    @XmlSchemaType(name = "anyURI")
    protected String dest;
    @XmlElement(required = true)
    protected SubscriptionControls controls;
    @XmlElement(required = true)
    protected String subscriptionID;

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
     * Ruft den Wert der params-Eigenschaft ab.
     * 
     * @return
     *     possible object is
     *     {@link QueryParams }
     *     
     */
    public QueryParams getParams() {
        return params;
    }

    /**
     * Legt den Wert der params-Eigenschaft fest.
     * 
     * @param value
     *     allowed object is
     *     {@link QueryParams }
     *     
     */
    public void setParams(QueryParams value) {
        this.params = value;
    }

    /**
     * Ruft den Wert der dest-Eigenschaft ab.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getDest() {
        return dest;
    }

    /**
     * Legt den Wert der dest-Eigenschaft fest.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setDest(String value) {
        this.dest = value;
    }

    /**
     * Ruft den Wert der controls-Eigenschaft ab.
     * 
     * @return
     *     possible object is
     *     {@link SubscriptionControls }
     *     
     */
    public SubscriptionControls getControls() {
        return controls;
    }

    /**
     * Legt den Wert der controls-Eigenschaft fest.
     * 
     * @param value
     *     allowed object is
     *     {@link SubscriptionControls }
     *     
     */
    public void setControls(SubscriptionControls value) {
        this.controls = value;
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
