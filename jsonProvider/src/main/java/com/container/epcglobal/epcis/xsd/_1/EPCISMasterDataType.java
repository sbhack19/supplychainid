
package com.container.epcglobal.epcis.xsd._1;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java-Klasse für EPCISMasterDataType complex type.
 * 
 * <p>Das folgende Schemafragment gibt den erwarteten Content an, der in dieser Klasse enthalten ist.
 * 
 * <pre>
 * &lt;complexType name="EPCISMasterDataType">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="VocabularyList" type="{urn:epcglobal:epcis:xsd:1}VocabularyListType"/>
 *         &lt;element name="extension" type="{urn:epcglobal:epcis:xsd:1}EPCISMasterDataExtensionType" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "EPCISMasterDataType", propOrder = {
    "vocabularyList",
    "extension"
})
public class EPCISMasterDataType {

    @XmlElement(name = "VocabularyList", required = true)
    protected VocabularyListType vocabularyList;
    protected EPCISMasterDataExtensionType extension;

    /**
     * Ruft den Wert der vocabularyList-Eigenschaft ab.
     * 
     * @return
     *     possible object is
     *     {@link VocabularyListType }
     *     
     */
    public VocabularyListType getVocabularyList() {
        return vocabularyList;
    }

    /**
     * Legt den Wert der vocabularyList-Eigenschaft fest.
     * 
     * @param value
     *     allowed object is
     *     {@link VocabularyListType }
     *     
     */
    public void setVocabularyList(VocabularyListType value) {
        this.vocabularyList = value;
    }

    /**
     * Ruft den Wert der extension-Eigenschaft ab.
     * 
     * @return
     *     possible object is
     *     {@link EPCISMasterDataExtensionType }
     *     
     */
    public EPCISMasterDataExtensionType getExtension() {
        return extension;
    }

    /**
     * Legt den Wert der extension-Eigenschaft fest.
     * 
     * @param value
     *     allowed object is
     *     {@link EPCISMasterDataExtensionType }
     *     
     */
    public void setExtension(EPCISMasterDataExtensionType value) {
        this.extension = value;
    }

}
