'use client'
import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import FindCourse from './FindCourse';
import { Container, Col, Row } from 'react-bootstrap';

interface SearchProps {
  onSelect?: (item: any) => void;
}

const Search:React.FC<SearchProps> = ({ onSelect }) => {
  const [activeSearch, setActiveSearch] = useState('');

  const handleSearch = (e:any) => {
    const searchTerm = e.target.value;
    setActiveSearch(searchTerm);
    
  };


  return (
    <Container>
      <Row>
        <Col md={12}>
          <div className='d-flex justify-items-center rounded flex-column align-items-center p-3 my-2'>
            <Paper
              component="form"
              sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 300 }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Find Course, Job, Exam, Coaching"
                inputProps={{ 'aria-label': 'find course' }}
                onChange={(e) => handleSearch(e)}
              />
              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
              <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
            <FindCourse search={activeSearch} onSelect={onSelect}/>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Search;
