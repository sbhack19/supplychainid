
package com.container.epcglobal.epcis.xsd._1;

import javax.xml.bind.annotation.*;
import java.math.BigDecimal;


/**
 * <p>Java-Klasse für QuantityElementType complex type.
 * 
 * <p>Das folgende Schemafragment gibt den erwarteten Content an, der in dieser Klasse enthalten ist.
 * 
 * <pre>
 * &lt;complexType name="QuantityElementType">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="epcClass" type="{urn:epcglobal:epcis:xsd:1}EPCClassType"/>
 *         &lt;sequence minOccurs="0">
 *           &lt;element name="quantity" type="{http://www.w3.org/2001/XMLSchema}decimal"/>
 *           &lt;element name="uom" type="{urn:epcglobal:epcis:xsd:1}UOMType" minOccurs="0"/>
 *         &lt;/sequence>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "QuantityElementType", propOrder = {
    "epcClass",
    "quantity",
    "uom"
})
public class QuantityElementType {

    @XmlElement(required = true)
    @XmlSchemaType(name = "anyURI")
    protected String epcClass;
    protected BigDecimal quantity;
    protected String uom;

    /**
     * Ruft den Wert der epcClass-Eigenschaft ab.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getEpcClass() {
        return epcClass;
    }

    /**
     * Legt den Wert der epcClass-Eigenschaft fest.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setEpcClass(String value) {
        this.epcClass = value;
    }

    /**
     * Ruft den Wert der quantity-Eigenschaft ab.
     * 
     * @return
     *     possible object is
     *     {@link BigDecimal }
     *     
     */
    public BigDecimal getQuantity() {
        return quantity;
    }

    /**
     * Legt den Wert der quantity-Eigenschaft fest.
     * 
     * @param value
     *     allowed object is
     *     {@link BigDecimal }
     *     
     */
    public void setQuantity(BigDecimal value) {
        this.quantity = value;
    }

    /**
     * Ruft den Wert der uom-Eigenschaft ab.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getUom() {
        return uom;
    }

    /**
     * Legt den Wert der uom-Eigenschaft fest.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setUom(String value) {
        this.uom = value;
    }

}
