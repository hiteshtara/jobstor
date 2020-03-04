import React from 'react'
import { Link } from 'react-router-dom'

import {
  Button,
  Accordion,
  Card,
  Tooltip,
  Grid,
  OverlayTrigger
} from 'react-bootstrap'

export const Homepage = ({ savedPositions, handleApply }) => {
  return (
    <>
      <nav className='pt-2'>
        <Button>
          <Link to='/create-position' className='nav-btn'>
            Create one or more new Positions
          </Link>
        </Button>
        <Button className='ml-4'>
          <Link to='/create-candidate' className='nav-btn'>
            Create one or more new Candidates
          </Link>
        </Button>
      </nav>
      <div className='positions'>
        {savedPositions ? (
          <Accordion className='w-100'>
            {savedPositions.map((p, index) => (
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant='link'
                    eventKey={index}
                  >
                    <div className='w-100 d-flex align-items-center justify-items-between'>
                      <span className='mr-5'>{p.title}</span>
                      {p.status === 'Closed' ? (
                        <OverlayTrigger
                          placement='top'
                          show={p.status === 'Closed'}
                          overlay={
                            <Tooltip id={`tooltip-${index}`}>
                              Position is closed
                            </Tooltip>
                          }
                        >
                          <Button variant='secondary'>Apply</Button>
                        </OverlayTrigger>
                      ) : (
                        <Button onClick={e => handleApply(p, e)}>Apply</Button>
                      )}
                    </div>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={index}>
                  <Card.Body>
                    <p>{`Title - ${p.title}`}</p>
                    <p>{`Department - ${p.department}`}</p>
                    <p>{`Description - ${p.desription ? p.desription : ''}`}</p>
                    <p>{`Date - ${p.date}`}</p>
                    <p>{`Status - ${p.status}`}</p>
                    <p>{`Applications - ${p.applications}`}</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            ))}
          </Accordion>
        ) : null}
      </div>
    </>
  )
}
