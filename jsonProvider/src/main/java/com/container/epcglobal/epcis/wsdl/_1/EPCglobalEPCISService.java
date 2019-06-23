
package com.container.epcglobal.epcis.wsdl._1;

import javax.xml.namespace.QName;
import javax.xml.ws.*;
import java.net.MalformedURLException;
import java.net.URL;


/**
 * This class was generated by the JAX-WS RI.
 * JAX-WS RI 2.2.9-b130926.1035
 * Generated source version: 2.2
 * 
 */
@WebServiceClient(name = "EPCglobalEPCISService", targetNamespace = "urn:epcglobal:epcis:wsdl:1", wsdlLocation = "file:/C:/BlockChain%20-%20Hackathon/Json3/src/res/EPCIS-1_2-schema/EPCglobal-epcis-query-1_2.wsdl")
public class EPCglobalEPCISService
    extends Service
{

    private final static URL EPCGLOBALEPCISSERVICE_WSDL_LOCATION;
    private final static WebServiceException EPCGLOBALEPCISSERVICE_EXCEPTION;
    private final static QName EPCGLOBALEPCISSERVICE_QNAME = new QName("urn:epcglobal:epcis:wsdl:1", "EPCglobalEPCISService");

    static {
        URL url = null;
        WebServiceException e = null;
        try {
            url = new URL("file:/C:/BlockChain%20-%20Hackathon/Json3/src/res/EPCIS-1_2-schema/EPCglobal-epcis-query-1_2.wsdl");
        } catch (MalformedURLException ex) {
            e = new WebServiceException(ex);
        }
        EPCGLOBALEPCISSERVICE_WSDL_LOCATION = url;
        EPCGLOBALEPCISSERVICE_EXCEPTION = e;
    }

    public EPCglobalEPCISService() {
        super(__getWsdlLocation(), EPCGLOBALEPCISSERVICE_QNAME);
    }

    public EPCglobalEPCISService(WebServiceFeature... features) {
        super(__getWsdlLocation(), EPCGLOBALEPCISSERVICE_QNAME, features);
    }

    public EPCglobalEPCISService(URL wsdlLocation) {
        super(wsdlLocation, EPCGLOBALEPCISSERVICE_QNAME);
    }

    public EPCglobalEPCISService(URL wsdlLocation, WebServiceFeature... features) {
        super(wsdlLocation, EPCGLOBALEPCISSERVICE_QNAME, features);
    }

    public EPCglobalEPCISService(URL wsdlLocation, QName serviceName) {
        super(wsdlLocation, serviceName);
    }

    public EPCglobalEPCISService(URL wsdlLocation, QName serviceName, WebServiceFeature... features) {
        super(wsdlLocation, serviceName, features);
    }

    /**
     * 
     * @return
     *     returns EPCISServicePortType
     */
    @WebEndpoint(name = "EPCglobalEPCISServicePort")
    public EPCISServicePortType getEPCglobalEPCISServicePort() {
        return super.getPort(new QName("urn:epcglobal:epcis:wsdl:1", "EPCglobalEPCISServicePort"), EPCISServicePortType.class);
    }

    /**
     * 
     * @param features
     *     A list of {@link javax.xml.ws.WebServiceFeature} to configure on the proxy.  Supported features not in the <code>features</code> parameter will have their default values.
     * @return
     *     returns EPCISServicePortType
     */
    @WebEndpoint(name = "EPCglobalEPCISServicePort")
    public EPCISServicePortType getEPCglobalEPCISServicePort(WebServiceFeature... features) {
        return super.getPort(new QName("urn:epcglobal:epcis:wsdl:1", "EPCglobalEPCISServicePort"), EPCISServicePortType.class, features);
    }

    private static URL __getWsdlLocation() {
        if (EPCGLOBALEPCISSERVICE_EXCEPTION!= null) {
            throw EPCGLOBALEPCISSERVICE_EXCEPTION;
        }
        return EPCGLOBALEPCISSERVICE_WSDL_LOCATION;
    }

}