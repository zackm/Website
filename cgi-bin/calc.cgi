#!/usr/bin/env python

import cgitb
cgitb.enable()

import time

i = 0
before = time.time()
start = time.time()
timerTime = time.time() - before
print timerTime
start = time.time()
while abs(time.time() - start) < 1:
    i += 1
print i
fulltime = i + i * timerTime
print fulltime, 'computations per second'


print 'Content-Type: text/html'
print
print '<head>'
print '<title>Test Results</title>'
print '</head>'
print '<div>'
print '<p>You can do'+fulltime+'calculations per second.'
print '</div>'