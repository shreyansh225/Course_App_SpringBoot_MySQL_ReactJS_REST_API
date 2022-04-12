package com.springrestD.springrestD.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import com.springrestD.springrestD.entities.Course;

import org.springframework.stereotype.Repository;

// Step 37 - To make the class as interface we need to simply replace the word class with interface before CourseDao {
// Since it need all the methods like update delete from database --- So We need to extend the JpaRepository
@Repository
public interface CourseDao extends JpaRepository<Course, Long>{   // Here < , > contains->  < With which entity will the operations be performed , Data Type of the Primary key in the entity>

	// (Step 38 in CourseServiceIMPL.java)
}
