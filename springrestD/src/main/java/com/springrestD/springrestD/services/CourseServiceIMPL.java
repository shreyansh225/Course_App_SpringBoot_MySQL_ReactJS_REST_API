package com.springrestD.springrestD.services;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springrestD.springrestD.dao.CourseDao;
import com.springrestD.springrestD.entities.Course;

//this class will implement the interface CourseService
@Service           //Step 19 -  this annotation helps spring understand that this class is working for service layer
public class CourseServiceIMPL implements CourseService {
// Step 38 -  remove/comment out the lists and remove the list in the constructors too
// Step 39 -  we need to create an object here for CourseDao here in implementation class of CourseService coz we cant create an object in interface
	@Autowired   // now after adding this annotation it will automatically create object for the implementation class of CourseDao and provide in CourseServiceIMPL
	private CourseDao courseDao;
	
//	List<Course> list;   // Step 13 - Created a list to store data temporarily to return a list
	
	public CourseServiceIMPL() {  // Step 14 - Created a default constructor
		
		// Step 15 - In the default constructor we have instantiated the list and created an object( list )
//		list = new ArrayList<>();
//		list.add(new Course(125,"Java Core Course ", " This Course contains basics of java "));
//		list.add(new Course(214,"Spring Boot Course ", " Creating Rest Api using Spring boot"));
		
	}
	
	@Override
	public List<Course> getCourses() {   // this will override all the methods in the interface (RUN TIME POLYMORPHYSM) 
		
		return courseDao.findAll();   // Step 40 - will return list of all courses( pickup from DB and create object then add in list and then will display the list
		
		//(Step 16 in MyController.java)
		//(Step 20 in MyController.java)
	}
	
	// Step 23 - After clicking on add unimplemented methods in CourseServiceIMPL; this getCourse() method will automatically get created here
	@Override
	public Course getCourse(long courseId) {  // Run Time Polymorphysm
		
		// Step 24 - create a variable c of type Course for traversing through list 
//		Course c = null;         
//		for(Course cors:list)     // now one by one courses will come out of list into the traversing variable cors
//		{
//			if(cors.getId()==courseId)       // as soon as the id will match the cors .... c will be assigned the value of cors and loop will break
//			{
//				c = cors;
//				break;              
//			}
//		}
		
		return courseDao.getOne(courseId);   // Step 40 - will return the course by course Id
	}

	// Step 27 - After clicking on add unimplemented methods in CourseServiceIMPL; this addCourse() method will automatically get created here
	@Override
	public Course addCourse(Course cors) {      // Run Time Polymorphysm
		
//		list.add(cors);   // Step 28 -  list.add since list is the container of courses
		courseDao.save(cors);     // Step 41 - will add the course
		return cors;                 
	}

	@Override
	public Course updateCourse(Course cors) {
//		list.forEach(e -> {
//			if(e.getId() == cors.getId())
//				{
//					e.setTitle(cors.getTitle());
//					e.setDescription(cors.getDescription());
//				}
//		});   
		courseDao.save(cors);      // Step 42 - will update the course by courseId
		return cors;               
	}

	@Override
	
	public void deleteCourse(long parseLong) {
		
//		list = this.list.stream().filter(e->e.getId()!=parseLong).collect(Collectors.toList());
		Course entity = courseDao.getOne(parseLong);           // Step 43 - will have to load the entity
		courseDao.delete(entity);								// Step 44 - will delete the entity
	}
	
	//(Step 25 in MyController.java)
	//(Step 29 in MyController.java)
	//(Step 45 in Course.java)
}
