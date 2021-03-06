
package com.container.epcglobal.epcis.xsd._1;

import com.container.org.unece.cefact.namespaces.standardbusinessdocumentheader.StandardBusinessDocumentHeader;
import org.w3c.dom.Element;

import javax.xml.bind.annotation.*;
import javax.xml.namespace.QName;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


/**
 * 
 *       specific header(s) including the Standard Business Document Header.
 *               
 * 
 * <p>Java-Klasse f�r EPCISHeaderType complex type.
 * 
 * <p>Das folgende Schemafragment gibt den erwarteten Content an, der in dieser Klasse enthalten ist.
 * 
 * <pre>
 * &lt;complexType name="EPCISHeaderType">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element ref="{http://www.unece.org/cefact/namespaces/StandardBusinessDocumentHeader}StandardBusinessDocumentHeader"/>
 *         &lt;element name="extension" type="{urn:epcglobal:epcis:xsd:1}EPCISHeaderExtensionType" minOccurs="0"/>
 *         &lt;any processContents='lax' namespace='##other' maxOccurs="unbounded" minOccurs="0"/>
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
@XmlType(name = "EPCISHeaderType", propOrder = {
    "standardBusinessDocumentHeader",
    "extension",
    "any"
})
public class EPCISHeaderType {

    @XmlElement(name = "StandardBusinessDocumentHeader", namespace = "http://www.unece.org/cefact/namespaces/StandardBusinessDocumentHeader", required = true)
    protected StandardBusinessDocumentHeader standardBusinessDocumentHeader;
    protected EPCISHeaderExtensionType extension;
    @XmlAnyElement(lax = true)
    protected List<Object> any;
    @XmlAnyAttribute
    private Map<QName, String> otherAttributes = new HashMap<QName, String>();

    /**
     * Ruft den Wert der standardBusinessDocumentHeader-Eigenschaft ab.
     * 
     * @return
     *     possible object is
     *     {@link StandardBusinessDocumentHeader }
     *     
     */
    public StandardBusinessDocumentHeader getStandardBusinessDocumentHeader() {
        return standardBusinessDocumentHeader;
    }

    /**
     * Legt den Wert der standardBusinessDocumentHeader-Eigenschaft fest.
     * 
     * @param value
     *     allowed object is
     *     {@link StandardBusinessDocumentHeader }
     *     
     */
    public void setStandardBusinessDocumentHeader(StandardBusinessDocumentHeader value) {
        this.standardBusinessDocumentHeader = value;
    }

    /**
     * Ruft den Wert der extension-Eigenschaft ab.
     * 
     * @return
     *     possible object is
     *     {@link EPCISHeaderExtensionType }
     *     
     */
    public EPCISHeaderExtensionType getExtension() {
        return extension;
    }

    /**
     * Legt den Wert der extension-Eigenschaft fest.
     * 
     * @param value
     *     allowed object is
     *     {@link EPCISHeaderExtensionType }
     *     
     */
    public void setExtension(EPCISHeaderExtensionType value) {
        this.extension = value;
    }

    /**
     * Gets the value of the any property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the any property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getAny().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link Element }
     * {@link Object }
     * 
     * 
     */
    public List<Object> getAny() {
        if (any == null) {
            any = new ArrayList<Object>();
        }
        return this.any;
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
