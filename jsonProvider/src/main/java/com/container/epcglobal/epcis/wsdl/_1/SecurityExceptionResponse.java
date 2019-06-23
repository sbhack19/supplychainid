
package com.container.epcglobal.epcis.wsdl._1;

import javax.xml.ws.WebFault;


/**
 * This class was generated by the JAX-WS RI.
 * JAX-WS RI 2.2.9-b130926.1035
 * Generated source version: 2.2
 * 
 */
@WebFault(name = "SecurityException", targetNamespace = "urn:epcglobal:epcis-query:xsd:1")
public class SecurityExceptionResponse
    extends Exception
{

    /**
     * Java type that goes as soapenv:Fault detail element.
     * 
     */
    private SecurityException faultInfo;

    /**
     * 
     * @param faultInfo
     * @param message
     */
    public SecurityExceptionResponse(String message, SecurityException faultInfo) {
        super(message);
        this.faultInfo = faultInfo;
    }

    /**
     * 
     * @param faultInfo
     * @param cause
     * @param message
     */
    public SecurityExceptionResponse(String message, SecurityException faultInfo, Throwable cause) {
        super(message, cause);
        this.faultInfo = faultInfo;
    }

    /**
     * 
     * @return
     *     returns fault bean: epcglobal.epcis_query.xsd._1.SecurityException
     */
    public SecurityException getFaultInfo() {
        return faultInfo;
    }

}
