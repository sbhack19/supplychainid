
package com.container.epcglobal.epcis.xsd._1;

import javax.xml.bind.annotation.*;
import javax.xml.namespace.QName;
import java.util.HashMap;
import java.util.Map;


/**
 * <p>Java-Klasse für EPCISHeaderExtensionType complex type.
 * 
 * <p>Das folgende Schemafragment gibt den erwarteten Content an, der in dieser Klasse enthalten ist.
 * 
 * <pre>
 * &lt;complexType name="EPCISHeaderExtensionType">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="EPCISMasterData" type="{urn:epcglobal:epcis:xsd:1}EPCISMasterDataType" minOccurs="0"/>
 *         &lt;element name="extension" type="{urn:epcglobal:epcis:xsd:1}EPCISHeaderExtension2Type" minOccurs="0"/>
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
@XmlType(name = "EPCISHeaderExtensionType", propOrder = {
    "epcisMasterData",
    "extension"
})
public class EPCISHeaderExtensionType {

    @XmlElement(name = "EPCISMasterData")
    protected EPCISMasterDataType epcisMasterData;
    protected EPCISHeaderExtension2Type extension;
    @XmlAnyAttribute
    private Map<QName, String> otherAttributes = new HashMap<QName, String>();

    /**
     * Ruft den Wert der epcisMasterData-Eigenschaft ab.
     * 
     * @return
     *     possible object is
     *     {@link EPCISMasterDataType }
     *     
     */
    public EPCISMasterDataType getEPCISMasterData() {
        return epcisMasterData;
    }

    /**
     * Legt den Wert der epcisMasterData-Eigenschaft fest.
     * 
     * @param value
     *     allowed object is
     *     {@link EPCISMasterDataType }
     *     
     */
    public void setEPCISMasterData(EPCISMasterDataType value) {
        this.epcisMasterData = value;
    }

    /**
     * Ruft den Wert der extension-Eigenschaft ab.
     * 
     * @return
     *     possible object is
     *     {@link EPCISHeaderExtension2Type }
     *     
     */
    public EPCISHeaderExtension2Type getExtension() {
        return extension;
    }

    /**
     * Legt den Wert der extension-Eigenschaft fest.
     * 
     * @param value
     *     allowed object is
     *     {@link EPCISHeaderExtension2Type }
     *     
     */
    public void setExtension(EPCISHeaderExtension2Type value) {
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
