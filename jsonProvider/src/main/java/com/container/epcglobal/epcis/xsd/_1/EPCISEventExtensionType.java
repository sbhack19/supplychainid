
package com.container.epcglobal.epcis.xsd._1;

import javax.xml.bind.annotation.*;
import javax.xml.namespace.QName;
import java.util.HashMap;
import java.util.Map;


/**
 * <p>Java-Klasse für EPCISEventExtensionType complex type.
 * 
 * <p>Das folgende Schemafragment gibt den erwarteten Content an, der in dieser Klasse enthalten ist.
 * 
 * <pre>
 * &lt;complexType name="EPCISEventExtensionType">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="eventID" type="{urn:epcglobal:epcis:xsd:1}EventIDType" minOccurs="0"/>
 *         &lt;element name="errorDeclaration" type="{urn:epcglobal:epcis:xsd:1}ErrorDeclarationType" minOccurs="0"/>
 *         &lt;element name="extension" type="{urn:epcglobal:epcis:xsd:1}EPCISEventExtension2Type" minOccurs="0"/>
 *       &lt;/sequence>
 *       &lt;anyAttribute processContents='lax'/>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "EPCISEventExtensionType", propOrder = {
    "eventID",
    "errorDeclaration",
    "extension"
})
public class EPCISEventExtensionType {

    @XmlSchemaType(name = "anyURI")
    protected String eventID;
    protected ErrorDeclarationType errorDeclaration;
    protected EPCISEventExtension2Type extension;
    @XmlAnyAttribute
    private Map<QName, String> otherAttributes = new HashMap<QName, String>();

    /**
     * Ruft den Wert der eventID-Eigenschaft ab.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getEventID() {
        return eventID;
    }

    /**
     * Legt den Wert der eventID-Eigenschaft fest.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setEventID(String value) {
        this.eventID = value;
    }

    /**
     * Ruft den Wert der errorDeclaration-Eigenschaft ab.
     * 
     * @return
     *     possible object is
     *     {@link ErrorDeclarationType }
     *     
     */
    public ErrorDeclarationType getErrorDeclaration() {
        return errorDeclaration;
    }

    /**
     * Legt den Wert der errorDeclaration-Eigenschaft fest.
     * 
     * @param value
     *     allowed object is
     *     {@link ErrorDeclarationType }
     *     
     */
    public void setErrorDeclaration(ErrorDeclarationType value) {
        this.errorDeclaration = value;
    }

    /**
     * Ruft den Wert der extension-Eigenschaft ab.
     * 
     * @return
     *     possible object is
     *     {@link EPCISEventExtension2Type }
     *     
     */
    public EPCISEventExtension2Type getExtension() {
        return extension;
    }

    /**
     * Legt den Wert der extension-Eigenschaft fest.
     * 
     * @param value
     *     allowed object is
     *     {@link EPCISEventExtension2Type }
     *     
     */
    public void setExtension(EPCISEventExtension2Type value) {
        this.extension = value;
    }

    /**
     * Gets a map that contains attributes that aren't bound to any typed property on this class.
     * 
     * <p>
     * the map is keyed by the name of the attribute and 
     * the value is the string value of the attribute.
     * 
     * the map returned by this method is live, and you can add new attribute
     * by updating the map directly. Because of this design, there's no setter.
     * 
     * 
     * @return
     *     always non-null
     */
    public Map<QName, String> getOtherAttributes() {
        return otherAttributes;
    }

}
