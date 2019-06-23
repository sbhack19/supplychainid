package com.example.demo;

import com.container.epcglobal.epcis.xsd._1.EPCISDocumentType;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController("/")
public class DemoController  {
    RestTemplate restTemplate = new RestTemplate();

    private final Gs1Gen gs1Gen;

    public DemoController(final Gs1Gen gs1Gen) {
        this.gs1Gen = gs1Gen;
    }

    @GetMapping
    public String hello(){
        EPCISDocumentType document = gs1Gen.getDocument();
        PushContainer pc = new PushContainer();
        pc.setPayload(document);
        HttpEntity<PushContainer> ntt = new HttpEntity<>(pc);
        restTemplate.postForObject("http://supplychainid-fe.zkjmnkbpjj.eu-central-1.elasticbeanstalk.com/recordevent", ntt, PushContainer.class);
        return createOutput(document);
    }

    private String createOutput(EPCISDocumentType document) {
        return document.toString();
    }
}
