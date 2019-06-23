package com.example.demo;

import com.sun.org.apache.xerces.internal.jaxp.datatype.XMLGregorianCalendarImpl;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

import javax.xml.datatype.XMLGregorianCalendar;
import java.time.LocalDateTime;

@Component
public class GregorianCalenderGenerator implements Converter<LocalDateTime, XMLGregorianCalendar> {

    @Override
    public XMLGregorianCalendar convert(final LocalDateTime source) {
        return XMLGregorianCalendarImpl.createDateTime(source.getYear(),
                source.getMonthValue(),
                source.getDayOfMonth(),
                source.getHour(),
                source.getMinute(),
                source.getSecond());
    }
}
