import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React from "react";

import { useNavigation } from "@react-navigation/native";

import Colors from "../constants/Colors";
import HomeScreenNewsItem from "./HomeScreenNewsItem";

import MyHeaderIcon from "./MyHeaderIcon";

const HomeScreenNewsTab = (props) => {
  const navigation = useNavigation();
  console.log(props);

  const data = [
    {
      title: 'KU Annoucement Regarding Measures and Guidelines for Operating Classes and Examinations',
      image: 'https://www.ku.ac.th/400x300/web-upload/202201/m_news/389/thumbnail_0869f838296e9444f1c547e8de51ed51.png',
      category: 'News',
      content: "This announcement supplements the previous Kasetsart University Announcement regarding Teaching and Learning at Kasetsart University following the New Year's Holidays 2022, Guidelines to Minimize the Spread of COVID-19, issued on 3 January 2022, which requested cooperation from faculties, college departments, and academic programs to conduct teaching online between 4-19 January2022 under the safety measures and guidance to prevent the spread of COVID-19, especially the Omicronvariant.Kasetsart University has issued these Measures and Guidelines for Operating Classes and Examinations for the Second Semester of Academic Year 2022 to ensure that all academic activities are appropriate and beneficial to students, and now Kasetsart University makes the following announcement :1. The faculties, college departments, and academic programs should consider operating classesand examinations using a hybrid format (online and on-site). On-site formats should be conducted as appropriate for each KU campus, taking into consider the situation regarding COVID in the specific region where the campus is located. In all circumstances, faculties, college departments, and academic programs shall monitor in-class operations to ensure all academic activities strictly comply with safety measures and practices to prevent the spread of COVID-19.2. Instructors should consider adopting a hybrid method, taking into account the readiness of students and the necessity of meeting on-site, by dividing students into groups of an appropriate number, but in all instances continuing to adhere to physical distancing and following procedures that comply with the Safety Measures of the Ministry of Public Health;3. Instructors and staff members who must work on-site to teach students or to provide support services are required to complete a health self-check check using an approved COVID-19 Antigen Self-Test Kit (ATK), and to comply with the guidelines previously established to reduce the risk of spreading COVID-19.4. If a student has a positive COVID-19 test result, the instructor shall immediately permit the student to be absent from the class or examination to for receive appropriate medical treatment. The instructor should suggest ways to make up any class or examination and how to implement an effective assessment.5. The university’s faculties, college departments, and academic programs shall take precautionsand adopt safety measures for all people who seek to enter a venue by strictly screening body temperature.Also, the supervisory administrative staff of each venue should keep facilities and equipment clean and hygienic, and should implement measures that ensures strict compliance with physical distancing guidelines. -2-6. Faculties, college departments, and academic programs should safety and health measuresestablished by the Ministry of Public Health, to ensure the health and safety of students, instructors,visitors, and all personnel. 7. If any operation cannot be conducted in accordance with this announcement, the President shall have final decision-making authority.This announcement is effective 17 January 2022 until further notice.Announced on 17 January 2022 (Chongrak Wachrinrat, Ph.D.)President, Kasetsart University",
    }, 
    {
      title: 'KU Annoucement Regarding Guidance for Workplace Opening and General Operations',
      image: 'https://www.ku.ac.th/400x300/web-upload/202201/m_news/389/thumbnail_f971406f8f32105b769f4c1ccbed6fd8.png',
      category: 'News',
      content: "After the New Year’s Festival 2022, Kasetsart University published Guidelines regardingWorkplace Operations at Kasetsart University’s (Issue 33, dated 3 January 2022) that urged a majorityof staff to work from home 4 - 14 January and to comply with national or provincial safety measures to prevent the further spread of COVID-19.Given that most students and staff at Kasetsart University are now fully vaccinated, Kasetsart University now declares the following guidelines for general work operations of its staff and personnel, which aim to ensure that the university’s urgent duties and administrative services provided to the public are administrated smoothly and effectively, with the understanding that all sections, offices and departments should continue to strictly comply with the guidelines and safety measures to prevent the spread of COVID-19 as announced by the Ministry of Public Health:1. All departments should assign at least 50% of the staff to work on-site each workday.However, if a staff member is among an at-risk group or has recently come into contact with a person who is infected with COVID-19, the head or director of a section, office or department should arrange for the staff member to work from home for 14 days, and the staff member shall strictly observe selfmonitoring protocols.2. Supervisory administrative authorities should weekly administer an approved COVID-19 Antigen self-test kit and screen KU staff before they enter the workplace, and all sections, offices, anddepartments should continue to strictly comply with the guidelines and safety measures intended toprevent the further spread of COVID-19 as announced by the Ministry of Public Health.3. Supervisory administrative authorities should urge KU staff to strictly follow universalprevention guidelines against COVID-19. All visitors must do a body temperature check before enteringa building or venue, comply with physical distancing guidelines, and wear a face mask at all times.Also, the supervisory administrative staff of each venue should provide alcohol-based hand sanitizer at the point of entry and keep the venue sanitary.4. Kasetsart University’s Campuses, practicum workplaces, and research stations locatedoutside of Bangkok should remain alert to the local situation and strictly operate in compliance with regional announcements. The heads all administrative units should consider the local health situation,adopt necessary supervisory practices, and report actions taken to comply with safety protocols to their department head.-2-5. If any operation cannot be conducted in compliance with this announcement, the head ofthe administrative unit should report and explain the matter immediately, in which case the Presidentshall have final decision-making authority.This announcement is effective beginning 17 January 2022 until further notice.Announced on 14 January 2022(Chongrak Wachrinrat, Ph.D.)President, Kasetsart University",
    },
    {
      title: 'KU Announcement Guidelines for work operation of KU’s staff',
      image: 'https://www.ku.ac.th/400x300/web-upload/202201/m_news/389/thumbnail_f35b557253f3b52c5507ca1a2cc9d22c.png',
      category: 'News',
      content: 'In compliance with Safety Measures to prevent the spread of COVID-19 Issue 33',      
    }
  ];

  return (
    <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.lectureContainers} horizontal={true}>
          {data.map((key, value) => {
            return (
              <HomeScreenNewsItem 
              title={key.title} 
              image={key.image}
              category={key.category}
              key={value}
              onSelect={() => {navigation.navigate("SingleNews", {
                title: key.title,
                image: key.image,
                category: key.category,
                content: key.content,
              });}}
              />
            )
          })}
          
        </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    padding: 12,
    height: 230,
    flexDirection: "column",
    backgroundColor: Colors.primaryBackground,
    flexGrow: 1
  },
  lectureContainers: {
    // width: 387,
    // flexDirection: "row",
    // alignItems: "flex-start",
    // paddingRight: 60
  },
  descriptionText: {
    fontFamily: "Prompt",
    fontSize: 15,
    fontWeight: "normal",
    color: "black",
    marginBottom: 10,
  },
});

export default HomeScreenNewsTab;
