import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

function CombinedExample() {
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control type="text" placeholder="search" />
        </Form.Group>
      </Form>

      <Button variant="primary" size="lg" active>
        Search
      </Button>

      <Stack gap={3}>
        <div className="p-2">First item</div>
        <div className="p-2">Second item</div>
        <div className="p-2">Third item</div>
      </Stack>
    </>
  );
}

export default CombinedExample;
