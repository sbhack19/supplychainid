package com.example.demo;

import com.container.epcglobal.epcis.xsd._1.*;
import com.container.epcglobal.xsd._1.EPC;
import org.springframework.core.convert.ConversionService;
import org.springframework.stereotype.Service;

import javax.xml.datatype.XMLGregorianCalendar;
import java.time.LocalDateTime;
import java.util.Random;

@Service
public class Gs1Gen {

    private final ConversionService conversionService;

    EPCISDocumentType document;

    public Gs1Gen(final ConversionService conversionService) {
        this.conversionService =conversionService;
    }

    public EPCISDocumentType getDocument(){
        Random random = new Random();
        document = new EPCISDocumentType();
        EPCISBodyType bodyType = new EPCISBodyType();
        EventListType eventList = new EventListType();
        ObjectEventType objectEventType = new ObjectEventType();
        objectEventType.setAction(ActionType.ADD);
        objectEventType.setEventTime(conversionService.convert(LocalDateTime.now(), XMLGregorianCalendar.class));
        objectEventType.setRecordTime(conversionService.convert(LocalDateTime.now().plusMinutes(5l), XMLGregorianCalendar.class));
        EPCListType epcListType = new EPCListType();
        EPC epc = new EPC();
        epc.setValue(String.valueOf(random.nextInt(98765432)));
        epcListType.getEpc().add(epc);
        objectEventType.setEpcList(epcListType);
        objectEventType.setBizStep("urn:epx:id:sgtin:342345.234523.101");
        objectEventType.setBizStep("urn:epx:id:sgtin:342345.234523.102");
        objectEventType.setDisposition("urn:epx:id:sgtin:342345.2345.1023451");
        BusinessLocationType businessLocationType = new BusinessLocationType();
        BusinessLocationExtensionType businessLocationExtensionType = new BusinessLocationExtensionType();
        businessLocationExtensionType.getAny().add("BusinessLocationExtension");
        businessLocationType.setExtension(businessLocationExtensionType);
        objectEventType.setBizLocation(businessLocationType);
        eventList.getObjectEventOrAggregationEventOrQuantityEvent().add(objectEventType);
        bodyType.setEventList(eventList);
        document.setEPCISBody(bodyType);
        return document;
    }
}
