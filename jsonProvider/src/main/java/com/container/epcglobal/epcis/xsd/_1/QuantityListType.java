
package com.container.epcglobal.epcis.xsd._1;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;
import java.util.ArrayList;
import java.util.List;


/**
 * <p>Java-Klasse f�r QuantityListType complex type.
 * 
 * <p>Das folgende Schemafragment gibt den erwarteten Content an, der in dieser Klasse enthalten ist.
 * 
 * <pre>
 * &lt;complexType name="QuantityListType">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="quantityElement" type="{urn:epcglobal:epcis:xsd:1}QuantityElementType" maxOccurs="unbounded" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "QuantityListType", propOrder = {
    "quantityElement"
})
public class QuantityListType {

    protected List<QuantityElementType> quantityElement;

    /**
     * Gets the value of the quantityElement property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the quantityElement property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getQuantityElement().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link QuantityElementType }
     * 
     * 
     */
    public List<QuantityElementType> getQuantityElement() {
        if (quantityElement == null) {
            quantityElement = new ArrayList<QuantityElementType>();
        }
        return this.quantityElement;
    }

}
