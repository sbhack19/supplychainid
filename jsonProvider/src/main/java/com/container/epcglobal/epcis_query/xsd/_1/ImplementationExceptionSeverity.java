
package com.container.epcglobal.epcis_query.xsd._1;

import javax.xml.bind.annotation.XmlEnum;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java-Klasse für ImplementationExceptionSeverity.
 * 
 * <p>Das folgende Schemafragment gibt den erwarteten Content an, der in dieser Klasse enthalten ist.
 * <p>
 * <pre>
 * &lt;simpleType name="ImplementationExceptionSeverity">
 *   &lt;restriction base="{http://www.w3.org/2001/XMLSchema}NCName">
 *     &lt;enumeration value="ERROR"/>
 *     &lt;enumeration value="SEVERE"/>
 *   &lt;/restriction>
 * &lt;/simpleType>
 * </pre>
 * 
 */
@XmlType(name = "ImplementationExceptionSeverity")
@XmlEnum
public enum ImplementationExceptionSeverity {

    ERROR,
    SEVERE;

    public String value() {
        return name();
    }

    public static ImplementationExceptionSeverity fromValue(String v) {
        return valueOf(v);
    }

}
