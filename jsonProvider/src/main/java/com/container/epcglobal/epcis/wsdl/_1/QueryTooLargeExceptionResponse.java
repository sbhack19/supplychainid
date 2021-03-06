
package com.container.epcglobal.epcis.wsdl._1;

import com.container.epcglobal.epcis_query.xsd._1.QueryTooLargeException;

import javax.xml.ws.WebFault;


/**
 * This class was generated by the JAX-WS RI.
 * JAX-WS RI 2.2.9-b130926.1035
 * Generated source version: 2.2
 * 
 */
@WebFault(name = "QueryTooLargeException", targetNamespace = "urn:epcglobal:epcis-query:xsd:1")
public class QueryTooLargeExceptionResponse
    extends Exception
{

    /**
     * Java type that goes as soapenv:Fault detail element.
     * 
     */
    private QueryTooLargeException faultInfo;

    /**
     * 
     * @param faultInfo
     * @param message
     */
    public QueryTooLargeExceptionResponse(String message, QueryTooLargeException faultInfo) {
        super(message);
        this.faultInfo = faultInfo;
    }

    /**
     * 
     * @param faultInfo
     * @param cause
     * @param message
     */
    public QueryTooLargeExceptionResponse(String message, QueryTooLargeException faultInfo, Throwable cause) {
        super(message, cause);
        this.faultInfo = faultInfo;
    }

    /**
     * 
     * @return
     *     returns fault bean: epcglobal.epcis_query.xsd._1.QueryTooLargeException
     */
    public QueryTooLargeException getFaultInfo() {
        return faultInfo;
    }

}
